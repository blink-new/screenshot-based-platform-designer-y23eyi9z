import React, { useState } from 'react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'
import { 
  Users, 
  BarChart3, 
  GitBranch, 
  Workflow, 
  Settings, 
  Package, 
  Briefcase, 
  DollarSign, 
  CreditCard, 
  Headphones, 
  UserCheck,
  LogOut,
  ChevronDown,
  ChevronRight,
  Home
} from 'lucide-react'

// Import module components
import CustomerModule from './modules/CustomerModule'
import ReportsModule from './modules/ReportsModule'
import RuleModelerModule from './modules/RuleModelerModule'
import InterfacesEDIModule from './modules/InterfacesEDIModule'
import WorkflowBuilderModule from './modules/WorkflowBuilderModule'
import UtilitiesModule from './modules/UtilitiesModule'
import ProductConfigModule from './modules/ProductConfigModule'
import OperationsModule from './modules/OperationsModule'
import FinanceModule from './modules/FinanceModule'
import CreditModule from './modules/CreditModule'
import TechSupportModule from './modules/TechSupportModule'
import EmployeeHRModule from './modules/EmployeeHRModule'

interface DashboardProps {
  onLogout: () => void
}

const modules = [
  { id: 'customer', name: 'Customer', icon: Users },
  { id: 'reports', name: 'Reports', icon: BarChart3 },
  { id: 'rule-modeler', name: 'Rule Modeler', icon: GitBranch },
  { id: 'interfaces-edi', name: 'Interfaces & EDI', icon: Workflow },
  { id: 'workflow-builder', name: 'Workflow Builder', icon: Settings },
  { id: 'utilities', name: 'Utilities', icon: Package },
  { id: 'product-config', name: 'Product Configuration', icon: Briefcase },
  { id: 'operations', name: 'Operations', icon: DollarSign },
  { id: 'finance', name: 'Finance', icon: DollarSign },
  { id: 'credit', name: 'Credit', icon: CreditCard },
  { id: 'tech-support', name: 'Tech Support', icon: Headphones },
  { id: 'employee-hr', name: 'Employee & HR', icon: UserCheck }
]

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeModule, setActiveModule] = useState('reports')
  const [expandedModules, setExpandedModules] = useState<string[]>([])

  const toggleModule = (moduleId: string) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId))
    } else {
      setExpandedModules([...expandedModules, moduleId])
    }
  }

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'customer':
        return <CustomerModule />
      case 'reports':
        return <ReportsModule />
      case 'rule-modeler':
        return <RuleModelerModule />
      case 'interfaces-edi':
        return <InterfacesEDIModule />
      case 'workflow-builder':
        return <WorkflowBuilderModule />
      case 'utilities':
        return <UtilitiesModule />
      case 'product-config':
        return <ProductConfigModule />
      case 'operations':
        return <OperationsModule />
      case 'finance':
        return <FinanceModule />
      case 'credit':
        return <CreditModule />
      case 'tech-support':
        return <TechSupportModule />
      case 'employee-hr':
        return <EmployeeHRModule />
      default:
        return <ReportsModule />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Navadhan</h2>
              <p className="text-xs text-gray-500">Financial Platform</p>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {modules.map((module) => {
              const Icon = module.icon
              const isActive = activeModule === module.id
              const isExpanded = expandedModules.includes(module.id)

              return (
                <div key={module.id}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`w-full justify-start text-left h-10 ${
                      isActive ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setActiveModule(module.id)
                      toggleModule(module.id)
                    }}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    <span className="flex-1">{module.name}</span>
                    {isExpanded ? 
                      <ChevronDown className="h-4 w-4" /> : 
                      <ChevronRight className="h-4 w-4" />
                    }
                  </Button>
                </div>
              )
            })}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <Button
            variant="outline"
            className="w-full justify-start text-gray-700"
            onClick={onLogout}
          >
            <LogOut className="mr-3 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {modules.find(m => m.id === activeModule)?.name || 'Dashboard'}
              </h1>
              <p className="text-sm text-gray-500">
                Unified Financial Management System
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                System Online
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@navadhan.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50">
          {renderModuleContent()}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
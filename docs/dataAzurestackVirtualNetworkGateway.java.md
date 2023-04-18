# `data_azurestack_virtual_network_gateway`

Refer to the Terraform Registory for docs: [`data_azurestack_virtual_network_gateway`](https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway).

# `dataAzurestackVirtualNetworkGateway` Submodule <a name="`dataAzurestackVirtualNetworkGateway` Submodule" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackVirtualNetworkGateway <a name="DataAzurestackVirtualNetworkGateway" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway azurestack_virtual_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGateway;

DataAzurestackVirtualNetworkGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurestackVirtualNetworkGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#name DataAzurestackVirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#resource_group_name DataAzurestackVirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#id DataAzurestackVirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#name DataAzurestackVirtualNetworkGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#resource_group_name DataAzurestackVirtualNetworkGateway#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#id DataAzurestackVirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#timeouts DataAzurestackVirtualNetworkGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.putTimeouts"></a>

```java
public void putTimeouts(DataAzurestackVirtualNetworkGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGateway;

DataAzurestackVirtualNetworkGateway.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGateway;

DataAzurestackVirtualNetworkGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGateway;

DataAzurestackVirtualNetworkGateway.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.activeActive">activeActive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList">DataAzurestackVirtualNetworkGatewayBgpSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.defaultLocalNetworkGatewayId">defaultLocalNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.enableBgp">enableBgp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList">DataAzurestackVirtualNetworkGatewayIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnClientConfiguration">vpnClientConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnType">vpnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `activeActive`<sup>Required</sup> <a name="activeActive" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.activeActive"></a>

```java
public IResolvable getActiveActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bgpSettings`<sup>Required</sup> <a name="bgpSettings" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.bgpSettings"></a>

```java
public DataAzurestackVirtualNetworkGatewayBgpSettingsList getBgpSettings();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList">DataAzurestackVirtualNetworkGatewayBgpSettingsList</a>

---

##### `defaultLocalNetworkGatewayId`<sup>Required</sup> <a name="defaultLocalNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.defaultLocalNetworkGatewayId"></a>

```java
public java.lang.String getDefaultLocalNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `enableBgp`<sup>Required</sup> <a name="enableBgp" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.enableBgp"></a>

```java
public IResolvable getEnableBgp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.ipConfiguration"></a>

```java
public DataAzurestackVirtualNetworkGatewayIpConfigurationList getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList">DataAzurestackVirtualNetworkGatewayIpConfigurationList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeouts"></a>

```java
public DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpnClientConfiguration`<sup>Required</sup> <a name="vpnClientConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnClientConfiguration"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList getVpnClientConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList</a>

---

##### `vpnType`<sup>Required</sup> <a name="vpnType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.vpnType"></a>

```java
public java.lang.String getVpnType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackVirtualNetworkGatewayBgpSettings <a name="DataAzurestackVirtualNetworkGatewayBgpSettings" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayBgpSettings;

DataAzurestackVirtualNetworkGatewayBgpSettings.builder()
    .build();
```


### DataAzurestackVirtualNetworkGatewayConfig <a name="DataAzurestackVirtualNetworkGatewayConfig" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayConfig;

DataAzurestackVirtualNetworkGatewayConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurestackVirtualNetworkGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#name DataAzurestackVirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#resource_group_name DataAzurestackVirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#id DataAzurestackVirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#name DataAzurestackVirtualNetworkGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#resource_group_name DataAzurestackVirtualNetworkGateway#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#id DataAzurestackVirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayConfig.property.timeouts"></a>

```java
public DataAzurestackVirtualNetworkGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#timeouts DataAzurestackVirtualNetworkGateway#timeouts}

---

### DataAzurestackVirtualNetworkGatewayIpConfiguration <a name="DataAzurestackVirtualNetworkGatewayIpConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayIpConfiguration;

DataAzurestackVirtualNetworkGatewayIpConfiguration.builder()
    .build();
```


### DataAzurestackVirtualNetworkGatewayTimeouts <a name="DataAzurestackVirtualNetworkGatewayTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayTimeouts;

DataAzurestackVirtualNetworkGatewayTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#read DataAzurestackVirtualNetworkGateway#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway#read DataAzurestackVirtualNetworkGateway#read}.

---

### DataAzurestackVirtualNetworkGatewayVpnClientConfiguration <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfiguration" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration;

DataAzurestackVirtualNetworkGatewayVpnClientConfiguration.builder()
    .build();
```


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate;

DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.builder()
    .build();
```


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate;

DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackVirtualNetworkGatewayBgpSettingsList <a name="DataAzurestackVirtualNetworkGatewayBgpSettingsList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList;

new DataAzurestackVirtualNetworkGatewayBgpSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.get"></a>

```java
public DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference <a name="DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference;

new DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress">peeringAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peerWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings">DataAzurestackVirtualNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `peeringAddress`<sup>Required</sup> <a name="peeringAddress" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddress"></a>

```java
public java.lang.String getPeeringAddress();
```

- *Type:* java.lang.String

---

##### `peerWeight`<sup>Required</sup> <a name="peerWeight" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```java
public java.lang.Number getPeerWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```java
public DataAzurestackVirtualNetworkGatewayBgpSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayBgpSettings">DataAzurestackVirtualNetworkGatewayBgpSettings</a>

---


### DataAzurestackVirtualNetworkGatewayIpConfigurationList <a name="DataAzurestackVirtualNetworkGatewayIpConfigurationList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList;

new DataAzurestackVirtualNetworkGatewayIpConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.get"></a>

```java
public DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference <a name="DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference;

new DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation">privateIpAddressAllocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration">DataAzurestackVirtualNetworkGatewayIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateIpAddressAllocation`<sup>Required</sup> <a name="privateIpAddressAllocation" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```java
public java.lang.String getPrivateIpAddressAllocation();
```

- *Type:* java.lang.String

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurestackVirtualNetworkGatewayIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayIpConfiguration">DataAzurestackVirtualNetworkGatewayIpConfiguration</a>

---


### DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference <a name="DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference;

new DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayTimeouts">DataAzurestackVirtualNetworkGatewayTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList;

new DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.get"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference;

new DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace">addressSpace</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress">radiusServerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret">radiusServerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate">revokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate">rootCertificate</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols">vpnClientProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration">DataAzurestackVirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace"></a>

```java
public java.util.List<java.lang.String> getAddressSpace();
```

- *Type:* java.util.List<java.lang.String>

---

##### `radiusServerAddress`<sup>Required</sup> <a name="radiusServerAddress" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress"></a>

```java
public java.lang.String getRadiusServerAddress();
```

- *Type:* java.lang.String

---

##### `radiusServerSecret`<sup>Required</sup> <a name="radiusServerSecret" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret"></a>

```java
public java.lang.String getRadiusServerSecret();
```

- *Type:* java.lang.String

---

##### `revokedCertificate`<sup>Required</sup> <a name="revokedCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList getRevokedCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a>

---

##### `rootCertificate`<sup>Required</sup> <a name="rootCertificate" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList getRootCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a>

---

##### `vpnClientProtocols`<sup>Required</sup> <a name="vpnClientProtocols" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols"></a>

```java
public java.util.List<java.lang.String> getVpnClientProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfiguration">DataAzurestackVirtualNetworkGatewayVpnClientConfiguration</a>

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList;

new DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference;

new DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList;

new DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference <a name="DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference;

new DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData">publicCertData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicCertData`<sup>Required</sup> <a name="publicCertData" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData"></a>

```java
public java.lang.String getPublicCertData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue"></a>

```java
public DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGateway.DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate">DataAzurestackVirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>

---



